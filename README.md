# @evhandel/wroomz-types

Shared TypeScript types for the Wroomz kart racing ecosystem.

## Installation

```bash
npm install @evhandel/wroomz-types
```

## Structure

```
src/
├── domain/race.ts   # Core types: Lap, StintAnalysis, RaceResult, RaceSettings, RacePenalties
├── api/race.ts      # API DTOs: RaceResponse, RaceListResponse, Create/UpdateRaceRequest
├── api/auth.ts      # Auth DTOs: AuthUserResponse, LoginRequest, RegisterRequest
└── models/
    ├── race.ts      # RaceModel (DB, Date fields), Race (base DTO)
    └── user.ts      # UserModel, User, UserResponseDto
```

## Usage

```typescript
import { RaceResponse, RaceSettings, CreateRaceRequest } from '@evhandel/wroomz-types';
```

## Scripts

- `npm run build` — compile to `dist/`
- `npm run watch` — watch mode
- `npm run format` — prettier
