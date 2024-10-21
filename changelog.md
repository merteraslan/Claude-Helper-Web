---
layout: default
title: Changelog
---

<div class="wrapper">
    <div class="container">
        <div class="main-content">
            <h1>Changelog</h1>

            <p>All notable changes to the Claude Helper extension will be documented in this file.</p>

            <p>The format is based on <a href="https://keepachangelog.com/en/1.1.0/">Keep a Changelog</a>,
            and this project adheres to <a href="https://semver.org/spec/v2.0.0.html">Semantic Versioning</a>.</p>

            <div class="version-container current-version">
                <h2>1.4.0 <span class="tag tag-latest">Latest</span> <span class="tag tag-new">New</span></h2>
                <h4>2024-10-21</h4>

                <h3><span class="tag tag-added">Added</span></h3>
                <ul>
                    <li>Minimap feature for chat pages, providing an overview of long conversations
                        <ul>
                            <li>Drag and drop functionality to move the viewport</li>
                            <li>Click-to-jump navigation within the minimap</li>
                        </ul>
                    </li>
                    <li>New options window accessible via the "Claude Helper" button in the toolbar</li>
                    <li>File exclusion settings based on file extension or regex pattern</li>
                    <li>Version control for file uploads using file hashing</li>
                    <li>Option to skip unchanged files or add them with an appended date</li>
                    <li>Settings export feature to save configurations as JSON files</li>
                    <li>Settings import feature to load configurations from JSON files</li>
                    <li>Toggle button for the minimap feature</li>
                    <li>Confirmation dialogues for important actions</li>
                    <li>Two-click access to start a new Claude conversation from any website</li>
                </ul>

                <h3><span class="tag tag-changed">Changed</span></h3>
                <ul>
                    <li>Improved UI for loading animations</li>
                    <li>Enhanced project page hosted on GitHub Pages</li>
                    <li>Options page now disables outside of claude.ai websites
                        <ul>
                            <li>Provides buttons for more information and quick access to claude.ai/new</li>
                        </ul>
                    </li>
                </ul>

                <h3><span class="tag tag-security">Security</span></h3>
                <ul>
                    <li>Added two new permissions: "storage" for saving settings and "downloads" for exporting configurations</li>
                </ul>
            </div>

            <div class="version-container">
                <h2>1.3.0</h2>
                <h4>2024-08-18</h4>

                <h3><span class="tag tag-added">Added</span></h3>
                <ul>
                    <li>Automatic detection and skipping of image files during upload process.</li>
                    <li>Comprehensive upload summary message including:
                        <ul>
                            <li>Number of successfully uploaded files</li>
                            <li>Number of skipped image files</li>
                            <li>Number of failed uploads (if any)</li>
                        </ul>
                    </li>
                </ul>

                <h3><span class="tag tag-changed">Changed</span></h3>
                <ul>
                    <li>Implemented a 5-second delay before page refresh to ensure visibility of the upload summary.</li>
                    <li>Page now only refreshes if at least one file was successfully uploaded.</li>
                    <li>Consolidated various status messages into a single, comprehensive upload summary.</li>
                </ul>

                <h3><span class="tag tag-fixed">Fixed</span></h3>
                <ul>
                    <li>Resolved an issue where users couldn't see the upload summary due to rapid page refresh.</li>
                </ul>
            </div>

            <div class="version-container">
                <h2>1.2.0</h2>
                <h4>2024-07-24</h4>

                <h3><span class="tag tag-added">Added</span></h3>
                <ul>
                    <li>Implemented "Remove All Files" button to delete all project files.</li>
                    <li>Progress indicator now includes a progress bar for both file uploads and file removals.</li>
                    <li>Error messages added to the progress indicator for displaying issues during file removal.</li>
                </ul>

                <h3><span class="tag tag-fixed">Fixed</span></h3>
                <ul>
                    <li>"Remove All Files" functionality now works correctly with the new API endpoint.</li>
                    <li>Resolved the issue where "Remove All Files" did not handle the absence of documents in the project.</li>
                    <li>Improved error handling during the removal process.</li>
                    <li>Enhanced page refresh logic after file removal to improve user experience.</li>
                </ul>

                <h3><span class="tag tag-changed">Changed</span></h3>
                <ul>
                    <li>Refactored code for better error handling and improved clarity.</li>
                </ul>
            </div>

            <div class="version-container">
                <h2>1.1.0</h2>
                <h4>2024-07-23</h4>

                <h3><span class="tag tag-added">Added</span></h3>
                <ul>
                    <li>Support for selecting multiple folders at once.</li>
                </ul>

                <h3><span class="tag tag-fixed">Fixed</span></h3>
                <ul>
                    <li>Fixed an issue causing crashes when uploading large files.</li>
                </ul>

                <h3><span class="tag tag-changed">Changed</span></h3>
                <ul>
                    <li>Improved the visual design of floating buttons.</li>
                    <li>Refactored code for better organization and readability.</li>
                </ul>
            </div>

            <div class="version-container">
                <h2>1.0.0</h2>
                <h4>2024-07-20</h4>

                <h3><span class="tag tag-added">Added</span></h3>
                <ul>
                    <li>Core functionality for uploading folders to Claude.</li>
                </ul>
            </div>

            <a href="index.html" class="button">Back to Home</a>
        </div>
    </div>

</div>
