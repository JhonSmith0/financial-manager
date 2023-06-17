import { pathsToModuleNameMapper } from "ts-jest";
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
import { compilerOptions } from "./tsconfig.json";
import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
	// [...]
	roots: ["<rootDir>"],
	preset: "ts-jest",
	modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
	moduleNameMapper: pathsToModuleNameMapper(
		compilerOptions.paths /*, { prefix: '<rootDir>/' } */
	),
	// setupFiles: ["./test/setup/index.ts"],
  
	transform: {
		"^.+\\.(t|j)sx?$": "@swc/jest",
	},
  setupFilesAfterEnv: ['./test/setup/index.ts']
};

export default jestConfig;
