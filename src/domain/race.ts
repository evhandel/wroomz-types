export interface Lap {
    no: number;
    time: number;
    elapsedTime: number;
}

export interface StintAnalysis {
    no: number;
    laps: Lap[];
    startGap: number;
    startTime: number;
    endTime: number;
    duration: number;
    avgLapExcludingPitExitLap: number;
    bestLap: number;
    pilot: string;
    kart?: string;
}

export interface RaceResult {
    teamNumber: string;
    avgTimeTotal: number;
    laps: number;
    totalTimeWithGapWithoutPenalties: number;
    pilots: string[];
    teamLabel?: string;
    penalty: number;
    stintsQuantity: number;
    isDisqualified?: boolean;
}

export interface RaceSettings {
    maxStint: number;
    minForPilotByTeamSize: Record<number, number>;
    pitStopDetectionTime: number;
    minPitStopLapTime: number;
    minStintsQuantity: number;
}

export interface RacePenalties {
    penaltiesManual: Record<string, number>;
    penaltiesByStintLimit: Record<string, number>;
    penaltiesByPilotLimit: Record<string, number>;
    disqualifiedTeams?: string[];
}

export type StintsByPilots = Record<string, { pilot?: string; kart?: string }[]>;
