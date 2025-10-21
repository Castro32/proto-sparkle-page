/*
import React, { useEffect, useState } from 'react';

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption: string;
  media_type: string;
  thumbnail_url?: string;
  timestamp: string;
  like_count: number;
  comments_count: number;
}

interface InstagramFeedProps {
  limit?: number;
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ limit = 8 }) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(`/api/instagram?limit=${limit}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load Instagram posts');
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [limit]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-[5px] max-w-[1301px] mx-auto">
        {Array.from({ length: limit }).map((_, index) => (
          <div key={index} className="aspect-square bg-gray-200 animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-[5px] max-w-[1301px] mx-auto">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square group relative overflow-hidden"
        >
          <img
            src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
            alt={post.caption?.slice(0, 100) || 'Instagram post'}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex flex-col items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
              <div className="flex items-center justify-center space-x-4 mb-2">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  {post.like_count}
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM17 11h-4v4h-2v-4H7V9h4V5h2v4h4v2z"/>
                  </svg>
                  {post.comments_count}
                </span>
              </div>
              <p className="text-sm line-clamp-3">
                {post.caption}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;
*/