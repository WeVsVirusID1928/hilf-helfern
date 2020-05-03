# Voluntero


## Dependencies
* C# + .NET Core
* NodeJS + npm
* Make sure node and npm are explicitly defined in your PATH

## Setup
* Start postgres database
* Set dotnet user-secrets that will be used in `AppSettings.cs`.
  * `dotnet user-secrets set "AppSettings:Secret" "SuperSecretDatabasePassword"`
  * `dotnet user-secrets set "AppSettings:Database" "DatabaseConnectionString"`


## How to build
Build configurations are defined in `save-saviours.sln`, build steps are defined in `SaveSaviors/SaveSaviours.csproj`.

Running the following commands will build both backend and frontend. The backend executable will be in `SaveSaviours/bin/Debug/netcoreapp3.1/publish/`.

* Build into dotnet-dependent .dll with `dotnet build --configuration Debug` or `dotnet build --configuration Release`
* Build into self-contained executable with `dotnet publish --configuration Debug` or `dotnet publish --configuration Release`

## How to run
This assumes you have run the build commands already.

* Run from the .dll with `dotnet SaveSaviours/bin/Debug/netcoreapp3.1/SaveSaviours.dll` or just `dotnet run` from the SaveSaviours folder
* Run from the .exe with `SaveSaviours/bin/Debug/netcoreapp3.1/SaveSaviours.exe`
* TODO: How to run self-contained executable file on Unix (It's probably `./SaveSaviours/bin/Debug/netcoreapp3.1/SaveSaviours` but I can't test it)


## Recommended Editor Setups

#### VS Code
* C# Extension (id: ms-dotnettools.csharp)
* EditorConfig Extension  (id: editorconfig.editorconfig)
* Add `"omnisharp.enableEditorConfigSupport": true, "omnisharp.enableRoslynAnalyzers": true` to vscode settings so the C# Extension uses .editorconfig for formatting
