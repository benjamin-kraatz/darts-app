import { Tables } from './supabase';

export type Leaderboard = Tables<'leaderboard'>;

export type Profile = Tables<'profiles'>;

export type Throw = Tables<'throws'>;

export type GameParticipantWithProfile = Tables<'game_participants'> & { profiles: Profile };