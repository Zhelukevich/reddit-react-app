import React from "react";
import { usePostData } from "../../hooks/usePostsData";

interface IPostsContextData {
	// author: string;
	title: string;
	// created: string;
	// preview?: string;
	score: string;
	// avatar?: string;
	id: string;
	// selftext?: string;
}


export const postsContext = React.createContext<Array<IPostsContextData>>([]);

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
	const {
		posts,
		loading,
		nextAfter,
		loadingPost,
		errorLoading,
		showMore,
		setShowMore,
	} = usePostData();

	return (
		<postsContext.Provider value={posts}>
			{children}
		</postsContext.Provider>
	)
}
