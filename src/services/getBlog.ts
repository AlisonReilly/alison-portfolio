import { gql } from 'graphql-request';
import { supabaseClient } from './supabaseConnection';

export interface BlogItem {
    title: string;
    originalDate: any;
    tags: string[];
    blogURL: string;
    content: any;
}

interface BlogResponse {
    dev_blogCollection: {
        edges: any;
    };
}

const GET_BLOG = gql`
query {
    dev_blogCollection(orderBy: {originalDate: DescNullsLast }){
      edges {
        node {
          id
          title
          originalDate
          blogURL
          tags
          content
        }
      }
    }
  }
  `;

// export async function getBlogGraphQL(): Promise<BlogItem[]> {
//     const data: BlogResponse = await supabaseClient.request(GET_BLOG);
//     const flatData = data.dev_blogCollection.edges.map(edge => ({
//         ...edge.node,
//         blogContent: JSON.parse(edge.node.blogContent),
//       }));
// }

export async function getBlogGraphQL(): Promise<BlogItem[]> {
    const data: BlogResponse = await supabaseClient.request(GET_BLOG);
    // console.log(JSON.stringify(data, null, 2));
    return data.dev_blogCollection.edges.map(edge => ({
      ...edge.node,
      content: JSON.parse(edge.node.content),
    }));
  }
