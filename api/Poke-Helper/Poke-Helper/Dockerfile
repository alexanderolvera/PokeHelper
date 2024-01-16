FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Poke-Helper/Poke-Helper.csproj", "Poke-Helper/"]
RUN dotnet restore "Poke-Helper/Poke-Helper.csproj"
COPY . .
WORKDIR "/src/Poke-Helper"
RUN dotnet build "Poke-Helper.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "Poke-Helper.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Poke-Helper.dll"]
