import React, { useEffect, useState } from "react";
import './main.global.css'
import { hot } from "react-hot-loader/root";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";

import { applyMiddleware, createStore } from "redux";
import { Provider, useDispatch } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, saveToken } from "./store/storeRedux";
import thunk from 'redux-thunk'
import { PostsContextProvider } from "./shared/context/postsContext";

import { Post } from "./shared/Post";
import NoMatch from "./shared/NoMatch/NoMatch";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";

const store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(thunk),
));


function AppWrap() {
	const [mounted, setMounted] = useState(false);
	const { userId } = useParams();

	useEffect(() => {
		setMounted(true);
	}, []);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(saveToken());
	}, []);

	return (
		<>
			{mounted && (
				<BrowserRouter>
					<PostsContextProvider>
						<Layout>
							<Header />
							<Content>
								<Routes>
									<Route path='/posts' element={<CardsList />} />
									<Route path='/posts/:id' element={
										<>
											<CardsList />
											<Post />
										</>
									} />

									<Route path='/error404' element={<NoMatch />} />
									<Route
										path='auth'
										element={<Navigate to='/posts' replace />}
									/>
									<Route
										path='/'
										element={<Navigate to='/posts' replace />}
									/>
									<Route
										path='*'
										element={<Navigate to='/error404' replace />}
									/>
								</Routes>

							</Content>
						</Layout>
					</PostsContextProvider>
				</BrowserRouter>
			)}
		</>
	);
}

function AppComponent() {
	return (
		<Provider store={store}>
			<AppWrap />
		</Provider>
	);
}

export const App = hot(() => <AppComponent />);
