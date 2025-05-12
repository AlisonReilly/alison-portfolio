import { gql } from 'graphql-request';
import { supabaseClient } from './supabaseConnection';

export interface ResumeEntry {
    organization: string;
    orgURL?: string;
    skills?: string[];
    achieved?: string[];
    description?: string;
    date?: string;
    title?: string;
    concentration?: string;
    location?: string;
    graduation? :string;
}

interface ResumeResponse {
    resume_education_entriesCollection: {
        edges: any;
    };
}

const GET_EDUCATION = gql`
  query {
    resume_education_entriesCollection(orderBy: { sortKey: DescNullsLast }) {
      edges {
        node {
          id
          title
          description
          skills
          organization
          date
          sortKey
          concentration
          location
          graduation
        }
      }
    }
  }
`;


export async function getEduGraphQL(): Promise<ResumeEntry[]> {
    const data: ResumeResponse = await supabaseClient.request(GET_EDUCATION);
    const flatData = data.resume_education_entriesCollection.edges.map(edge => edge.node);
    return flatData;
}