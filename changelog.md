---
layout: default
title: Changelog
---

# Changelog

All notable changes to the Claude Helper extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

No upcoming changes currently planned.

## [1.3.0] - 2024-08-18

### Added

- Automatic detection and skipping of image files during upload process.
- Comprehensive upload summary message including:
  - Number of successfully uploaded files
  - Number of skipped image files
  - Number of failed uploads (if any)

### Changed

- Implemented a 5-second delay before page refresh to ensure visibility of the upload summary.
- Page now only refreshes if at least one file was successfully uploaded.
- Consolidated various status messages into a single, comprehensive upload summary.

### Fixed

- Resolved an issue where users couldn't see the upload summary due to rapid page refresh.

[Unreleased]: https://github.com/yourusername/claude-helper/compare/v1.3.0...HEAD
[1.3.0]: https://github.com/yourusername/claude-helper/releases/tag/v1.3.0
