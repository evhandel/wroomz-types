import {
    RaceResult,
    RaceSettings,
    RacePenalties,
    StintAnalysis,
    StintsByPilots,
} from '../domain/race';

export interface RaceModel {
    id: number;
    name: string;
    isPublished: boolean;
    teamsAndPilots: any[] | null;
    settings: RaceSettings | null;
    penalties: RacePenalties | null;
    results: RaceResult[] | null;
    lapsNotDelimiters: Record<string, any> | null;
    stintByPilots: StintsByPilots | null;
    rawData: Record<string, any> | null;
    calculatedData: Record<string, StintAnalysis[]> | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface Race {
    name: string;
    isPublished: boolean;
}
