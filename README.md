# Voluntero


## Dependencies
* C# + .NET Core
* NodeJS + npm
* Make sure node and npm are explicitly defined in your PATH

## How to build
Build configurations are defined in `save-saviours.sln`, build steps are defined in `SaveSaviors/SaveSaviours.csproj`.

Running the following commands will build both backend and frontend. The backend executable will be in `SaveSaviours\bin\Debug\netcoreapp3.1\publish\`.

* Build into .dll with `dotnet build --configuration Debug` or `dotnet build --configuration Release`
* Build into executable with `dotnet publish --configuration Debug` or `dotnet publish --configuration Release`