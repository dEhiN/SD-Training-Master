#!/usr/bin/bash
# This script will automate the task of merging a 
# separate and previous course repo into the new
# master repo.

# set -x

parent_dir="special-repo-course-merge"
master_dir="master-repo"
staging_dir="staging"

user_gh="https://github.com/dEhiN/"
repo_dir_gh=""
repo_dir_master=""

pwd_debug="false"

activate_venv() {
	set_dir
	printf "\nActivating the Python virtual environment...\n"
	source .venv/Scripts/activate
}

print_pwd() {
	if [[ "$pwd_debug" == "true" ]]; then
		printf "\nThe current directory is: %s\n" "$PWD"
	fi
}

set_dir() {	
	local curr_dir="$PWD"

	if [[ -z "$1" ]]; then
		local loop_quit=0
		while [[ $loop_quit -eq 0 ]]; do
			print_pwd
			if [[ "$curr_dir" != *"/$parent_dir" ]]; then	
				cd ..
				curr_dir="$PWD"
			else
				loop_quit=1
			fi
		done
	else
		print_pwd
		cd "$1"
		print_pwd
	fi
}

set_merge() {
	set_dir
	set_dir "$master_dir"

	if [[ "$1" == "add" ]]; then
		printf "\nAdding %s as a remote source...\n" "$repo_dir_gh"
		git remote add "$repo_dir_gh" "../staging/${repo_dir_gh}"
	elif [[ "$1" == "remove" ]]; then
		printf "\nRemoving %s as a remote source...\n" "$repo_dir_gh"
		git remote remove "$repo_dir_gh"
	else
		printf"\nUnable to set up the merge details...exiting...\n"
		exit
	fi
}

set_staging() {
	set_dir
	set_dir "$staging_dir"
}

clone_repo() {
	if [[ -z "$repo_dir_gh" ]]; then
		printf "\nNo repository name was given...exiting...\n"
		exit
	fi

	set_staging

	local repo_url="${user_gh}${repo_dir_gh}.git"

	printf "\nCloning %s...\n" "$repo_dir_gh"
	git clone "$repo_url"	
}

filter_repo() {
	if [[ -z "$repo_dir_master" ]]; then
		printf "\nNo subdirectory filter name was given...exiting...\n"
		exit
	fi

	set_staging
	set_dir "$repo_dir_gh"

	printf "\nRunning git filter-repo on %s...\n" "$repo_dir_gh"
	git filter-repo --to-subdirectory-filter "$repo_dir_master"
}

merge_repo() {
	set_merge "add"
	
	printf "Fetching from remote %s..." "$repo_dir_gh"
	git fetch "$repo_dir_gh"


	printf "Merging %s into %s..." "$repo_dir_gh" "$master_dir"
	git merge "${repo_dir_gh}/main" --allow-unrelated-histories
}

cleanup_repo() {
	set_merge "remove"

	set_staging
	
	printf "Removing the %s folder from %s..." "$repo_dir_gh" "$staging_dir"
	rm -rf "$repo_dir_gh"
}

if [[ -n "$1" && "$1" == "debug" ]]; then
	pwd_debug="true"
fi

echo "Starting script..."

if [[ "$PWD" != *"$parent_dir"* ]]; then
	printf "\nThe directory \"%s\" cannot be found on the current path...exiting...\n" >&2 "$parent_dir"
	exit
fi

set_dir
activate_venv

printf "\nPlease enter the name of the repository exactly as it is on GitHub: "
read repo_dir_gh
clone_repo

printf "\nPlease enter the full path and name of the new subdirectory to filter to from the \"master-repo\" root: "
read repo_dir_master
filter_repo

printf "\nStarting the merge of %s to %s...\n" "$repo_dir_gh" "$master_dir"
merge_repo

printf "\nCleaning up..."
cleanup_repo

echo "...script finished execution!"