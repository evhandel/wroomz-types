import {
    RaceResult,
    RaceSettings,
    RacePenalties,
    StintAnalysis,
    StintsByPilots,
} from '../domain/race';

export interface RaceResponse {
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
    createdAt: string;
    updatedAt: string;
}

export type RaceListResponse = Pick<
    RaceResponse,
    'id' | 'name' | 'isPublished' | 'createdAt' | 'updatedAt'
>;

export interface CreateRaceRequest {
    name: string;
    isPublished?: boolean;
    teamsAndPilots?: any[];
    settings?: RaceSettings;
    penalties?: RacePenalties;
    results?: RaceResult[];
    lapsNotDelimiters?: Record<string, any>;
    stintByPilots?: StintsByPilots;
    rawData?: Record<string, any>;
    calculatedData?: Record<string, StintAnalysis[]>;
}

export interface UpdateRaceRequest {
    name?: string;
    isPublished?: boolean;
    teamsAndPilots?: any[];
    settings?: RaceSettings;
    penalties?: RacePenalties;
    results?: RaceResult[];
    lapsNotDelimiters?: Record<string, any>;
    stintByPilots?: StintsByPilots;
    rawData?: Record<string, any>;
    calculatedData?: Record<string, StintAnalysis[]>;
}
