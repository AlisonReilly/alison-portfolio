import { GraphQLClient } from 'graphql-request';


const endpoint = 'https://jyjbmkyocugprwgpusiu.supabase.co/graphql/v1';
// note: this is a public api key for the anon role setup with supabase and row level security for read only access
// will make fancier in the future
const anonPublicKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5amJta3lvY3VncHJ3Z3B1c2l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3OTM1MzMsImV4cCI6MjA2MTM2OTUzM30.EEiHI-Mz6_GfFGuisN8PtfZN742jYoD8GBYmlepO0Xg'

export const supabaseClient = new GraphQLClient(endpoint, {
    headers: {

        apikey: anonPublicKey,
    },
});