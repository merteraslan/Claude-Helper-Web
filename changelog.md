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

### <span class="tag tag-added">Added</span>

- Automatic detection and skipping of image files during upload process.
- Comprehensive upload summary message including:
  - Number of successfully uploaded files
  - Number of skipped image files
  - Number of failed uploads (if any)

### <span class="tag tag-changed">Changed</span>

- Implemented a 5-second delay before page refresh to ensure visibility of the upload summary.
- Page now only refreshes if at least one file was successfully uploaded.
- Consolidated various status messages into a single, comprehensive upload summary.

### <span class="tag tag-fixed">Fixed</span>

- Resolved an issue where users couldn't see the upload summary due to rapid page refresh.

<style>
    .tag {
        display: inline-block;
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 0.8em;
        font-weight: bold;
        margin-right: 8px;
    }
    .tag-added { background-color: #28a745; color: white; }
    .tag-changed { background-color: #ffc107; color: black; }
    .tag-deprecated { background-color: #fd7e14; color: white; }
    .tag-removed { background-color: #dc3545; color: white; }
    .tag-fixed { background-color: #17a2b8; color: white; }
    .tag-security { background-color: #6610f2; color: white; }
</style>
