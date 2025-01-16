# Terminal Commands for Setting Up Playwright/TypeScript Environment

# Sprawdź wersję Node.js

node -v

# Inicjalizacja Playwright

npm init playwright@latest

# Instalacja wszystkich zależności

npm i

# Faker.js Installation

### Install Faker.js

npm install @faker-js/faker

# Instalacja Prettier jako zależności deweloperskiej

npm install --save-dev --save-exact prettier

# Dodanie plików konfiguracji Prettier

## (domyślne wartości, które można dostosować info w README.md)

.prettierignore
.prettierrc.json

# Formatowanie wszystkich plików w projekcie

npx prettier --write .

# Włączenie opcji Trace Viewer

## W pliku

playwright.config.ts

## zmieniamy w bloku

use:

## ustawienie dla opcji

```
use: {
  trace: 'retain-on-failure’,
  video: 'retain-on-failure',
  },
```

## Dzięki temu Trace Viewer będzie dostępny w raportach dla naszych testów.

# W widoku Extensions wyszukujemy i dodajemy wtyczkę o nazwie

## jak kiedyś to robiłam w VScode to to jest

Playwright Test for VSCode.

## Po jej uruchomieniu otrzymujemy nowy widok:

Testing

## symbol : menzurka
