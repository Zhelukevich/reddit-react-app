import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

import { SortingComments } from './SortingComments';
import styles from './post.css'
import { Comments } from './Comment';
import { CommentsUser } from './Comment/CommentsUser';
import { CommentsText } from './Comment/CommentsText';
import { CommentsControls } from './Comment/CommentsControls';
import { CommentFormContainer } from './CommentFormContainer';
import { redirect, useNavigate } from 'react-router-dom';


export function Post() {
	const ref = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	useEffect(() => {
		function handleClick(event: MouseEvent) {
			if (event.target instanceof Node && !ref.current?.contains(event.target)) {
				navigate('/posts');
				// redirect('/posts')
			}
		}

		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		}
	}, []);


	const node = document.querySelector('#modal_root');
	if (!node) return null;

	return ReactDOM.createPortal((
		<div className={styles.modal} ref={ref}>
			<h2>
				Следует отметить, что новая модель организационной деятельности поможет
			</h2>
			<div className={styles.content}>
				<p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
				<p>Безусловно, глубокий уровень погружения создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса системы массового участия. Внезапно, сделанные на базе интернет-аналитики выводы освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно.</p>
				<p>Разнообразный и богатый опыт говорит нам, что выбранный нами инновационный путь обеспечивает широкому кругу (специалистов) участие в формировании новых принципов формирования материально-технической и кадровой базы. Также как существующая теория в значительной степени обусловливает важность благоприятных перспектив. Для современного мира консультация с широким активом однозначно определяет каждого участника как способного принимать собственные решения касаемо приоритизации разума над эмоциями!</p>
				<p>Вот вам яркий пример современных тенденций - постоянный количественный рост и сфера нашей активности обеспечивает актуальность глубокомысленных рассуждений! Не следует, однако, забывать, что высококачественный прототип будущего проекта предполагает независимые способы реализации дальнейших направлений развития.</p>
			</div>
			<CommentFormContainer />
			<SortingComments />
			<Comments>
				<CommentsUser />
				<CommentsText />
				<CommentsControls />
			</Comments>
		</div>
	), node
	);
}
