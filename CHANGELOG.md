# Change Log
All notable changes to the "panda-extended" extension will be documented in this
file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [0.6.1] - 2017-06-21
### Fixed
- Use a better selector for JSX components that includes children and parent components

## [0.6.0] - 2017-06-16
### Added
- Themed constants and keyword this
- JSX component names are pink and tags are light orange

### Fixed
- Fixed JSDoc defaults theming
- Class meta orange making everything orange

### Removed
- Unused rules from Panda base

## [0.5.0] - 2017-06-15
### Changed
Used the base theme scopes from Atom, a number of which don't match, but in general
the theme is lightened a bit and is a bit easier to scan.

## [0.4.0] - 2017-06-13
### Added
- Themed cursor

## [0.3.0] - 2017-06-09
### Added
- Themed editor git gutter markers
- Themed editor warning markers
- Themed editor ruler
- Themed editor buttons
- Themed editor bracket match borders

### Changed
- Moved theme colors to separate yaml file `themes/colors.yaml`
- Updated theme style files to yaml files for terser syntax
- Moved generated theme file to `/dist` for clearer separation of input and output

## [0.2.0] - 2017-06-08
### Added
- Themed the diff colors

## [0.1.0] - 2017-06-06
### Added
- Themed the integrated terminal

## [0.0.1] - 2017-05-13
Initial release 🎉
