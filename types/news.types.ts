export interface ParamsNews {
  q: string;
  from: string;
  sortBy: string;
}

export interface NewsResponse {
  articles: News[];
  status: string;
  totalResults: number;
}

export interface News {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
