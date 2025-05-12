import { gql } from 'graphql-request';
import { supabaseClient } from './supabaseConnection';

export interface PortfolioItem {
    title: string;
    mediaLocation?: string;
    description: string;
    tags: string[];
    githubURL: string | string[];
    blogURL?: string;
    projectAssociation?: string;
    demoType: 'video' | 'image' | 'live'
    youTubeURL?: string;
    sequence: number;
}

interface ProjectResponse {
    project_showcaseCollection: {
        edges: any;
    };
}

const GET_PROJECTS = gql`
  query {
    project_showcaseCollection(orderBy: { title: AscNullsLast }) {
      edges {
        node {
          id
          title
          description
          tags
          projectAssociation
          demoType
          sequence
          githubURL
          blogURL
          youtubeURL
          mediaLocation
        }
      }
    }
  }
`;

export async function getProjectsGraphQL(): Promise<PortfolioItem[]> {
    const data: ProjectResponse = await supabaseClient.request(GET_PROJECTS);
    const flatData = data.project_showcaseCollection.edges.map(edge => edge.node);
    return flatData;
}
