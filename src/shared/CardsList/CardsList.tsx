import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { usePostData } from '../../hooks/usePostsData';
import { RootState } from '../../store/storeRedux';
import { Card } from './Card/Card';
import styles from './cardslist.css';

export function CardsList() {
	const token = useSelector<RootState, string>((state) => state.token);
	const bottomOfList = useRef<HTMLDivElement>(null);

	const {
		posts,
		loading,
		nextAfter,
		loadingPost,
		errorLoading,
		showMore,
		setShowMore,
	} = usePostData();

	function loadMore() {
		setShowMore(0)
	}

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && showMore !== 3) loadingPost();
		}, {
			rootMargin: '10px',
		});

		if (bottomOfList.current) observer.observe(bottomOfList.current);

		return () => {
			if (bottomOfList.current) observer.unobserve(bottomOfList.current);
		}
	}, [nextAfter, showMore, token]);



	return (
		<ul className={styles.cardsList}>
			{posts.length === 0 && !loading && !errorLoading && (
				<div style={{ textAlign: 'center' }}>
					Нет ни одного поста!
				</div>
			)}

			{posts?.map(post => (
				< Card
					key={post.id}
					// preview={post.preview}
					author={post.author}
					// created={post.created}
					title={post.title}
					score={post.score}
					// avatar={post.avatar}
					id={post.id}
				/>
			))}

			<div ref={bottomOfList} />

			{loading && (
				<div style={{ textAlign: 'center' }}>
					Загрузка...
				</div>
			)}

			{errorLoading && (
				<div role='alert' style={{ textAlign: 'center' }}>
					{errorLoading}
				</div>
			)}

			{showMore === 3 && (
				<button className={styles.loadMore} onClick={loadMore}>
					Загрузить ещё
				</button>)}
		</ul>
	);
}
