# Software Development Training Master Repository

## What is it?

This repository will act as a master repository for all work related to software development courses and training.

Over the course of my journey to becoming a developer, I have taken various training courses, from online certificates and programs, to local college diplomas.

In general, I have created a repository for each course or program. For some of them, the coursework involved forking a repository created by the course creators for a specific project or module of the course. In these cases, a course could have multiple repositories of work associate with it.

I decided to merge them all into one master repository. The intent is to make it easier to showcase any and all work I have done for all these training courses.

## How are things structured?

Each previously existing separate repository has been brought in and merged to its own subdirectory under this repository root.

Additionally, I have also tried to group the different courses based on either the institution or the online platform that provided the course.

The `git` history of each merged repository has been preserved and brought in as well. This has been done in such a way that the `git` log of this master repository will show one continuous history with branches for each merged repository.

## How was this accomplished?

I used the `Python` package _git_filter_repo_ to rewrite the git histories of each merged repository. This tool takes the existing `git` history and rewrites it so that it looks like the repository being manipulated was never on its own but always part of a larger repository.

This is done by passing in a directory name to filter, and the rewritten history will show that the repository being manipulated was only ever constrained to that directory.

## Anything else?

If you are interested in further technical details, feel free to reach out.

<br>
@dEhiN

_Last updated: 2026-08-06_
