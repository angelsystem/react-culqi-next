# Changelog

All notable changes to this project will be documented in this file.

## [0.1.3] - 2025-08-09

### Added
- **React 19 Compatibility**: Full support for React 19
- Updated TypeScript configuration for modern React patterns
- Enhanced type definitions with `React.JSX.Element`

### Changed
- **BREAKING**: Changed from `createContext` import to `React.createContext`
- Updated peer dependencies to require React 18.0.0+
- Updated development dependencies to React 19
- Updated TypeScript to version 5.0.0
- Updated Node.js requirement to >=18

### Fixed
- Resolved `createContext is not a function` error in React 19
- Fixed TypeScript compilation issues with modern React
- Improved build process compatibility

### Technical Details
- Modified `src/version4/CulqiContext.tsx` to use `React.createContext`
- Modified `src/version3/CulqiContextV3.tsx` to use `React.createContext`
- Updated `tsconfig.json` for better React 19 support
- Updated `package.json` dependencies and peer requirements

## [0.1.2] - Previous Version

Initial release with React 16+ compatibility.