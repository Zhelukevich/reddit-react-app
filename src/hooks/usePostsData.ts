import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/storeRedux';
import { getTimePost } from '../utils/react/getTimePost';


export interface IPostData {
	author: string;
	title: string;
	// created: string;
	// preview?: string;
	score: string;
	// avatar?: string;
	id: string;
	// selftext?: string;
}

export function usePostData() {
	const token = useSelector<RootState, string>((state) => state.token);
	const [posts, setPosts] = useState<IPostData[]>([]);
	const [loading, setLoading] = useState(false);
	const [errorLoading, setErrorLoading] = useState('');
	const [nextAfter, setNextAfter] = useState('');
	const [showMore, setShowMore] = useState(0);


	function loadingPost() {
		if (token) {
			setLoading(true);
			axios.get('https://www.reddit.com/best.json?sr_detail=true', {
				params: {
					limit: 10,
					after: nextAfter,
				},
			})

				.then((resp) => {
					{
						const posts: IPostData[] = [];
						console.log(resp);
						resp.data.data.children.forEach((post: any) => {
							const postData: IPostData = post.data;



							// const createdAt = getTimePost(postData.created);
							// let previewImg = '';
							// let avatarImg = '';
							// if (
							// 	post.data.url.endsWith('.jpg') ||
							// 	post.data.url.endsWith('.png')
							// ) {
							// 	previewImg = post.data.url;
							// }
							// if (post.data.sr_detail.community_icon) {
							// 	const urlIconImg = new URL(post.data.sr_detail.community_icon);
							// 	avatarImg = `${urlIconImg.origin}${urlIconImg.pathname}`;
							// }

							posts.push({
								author: postData.author,
								title: postData.title,
								// created: createdAt,
								// preview: previewImg,
								score: postData.score,
								// avatar: avatarImg,
								id: postData.id,
								// selftext: postData.selftext,
							});
						});
						setShowMore((showMore + 1));
						setNextAfter(resp.data.data.after);
						setPosts((prev) => prev.concat(...posts));
					}
				})
				.catch((error) => setErrorLoading(String(error)))
				.finally(() => {
					setLoading(false);
				});
		} else {
			setErrorLoading('Необходимо авторизироваться');
		}
	}
	return {
		posts,
		loading,
		nextAfter,
		loadingPost,
		errorLoading,
		showMore,
		setShowMore,
	};

}


