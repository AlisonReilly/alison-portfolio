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
    resume_entriesCollection: {
        edges: any;
    };
}

const GET_RESUME = gql`
  query {
  resume_entriesCollection(orderBy: {sortKey: DescNullsLast }){
    edges {
      node {
        id
        title
        location
        description
        date
        sortKey
        achieved
        skills
        orgURL
        organization
        concentration
      }
    }
  }
}
`;

const GET_EDUCATION = gql`
  query {
    resume_entriesCollection(orderBy: { sortKey: DescNullsLast }) {
      edges {
        node {
          id
          title
          description
          skills
          achieved
          organization
          date
          orgURL
          sortKey
          concentration
          location
          graduation
        }
      }
    }
  }
`;

export async function getResumesGraphQL(): Promise<ResumeEntry[]> {
    const data: ResumeResponse = await supabaseClient.request(GET_RESUME);
    const flatData = data.resume_entriesCollection.edges.map(edge => edge.node);
    return flatData;
}