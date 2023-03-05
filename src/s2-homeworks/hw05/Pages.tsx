import React from 'react'
import {Routes, Route, Navigate, NavLink} from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                <Route path={'/'} element={<NavLink to={'/page/:id'}/>}/>

                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                <Route path={'/page/:id'} element={<NavLink to={'/page/:id'}/>}/>
                <Route path={'/page/:id'} element={<NavLink to={'/page/:id'}/>}/>
                <Route path={'/page/:id'} element={<NavLink to={'/page/:id'}/>}/>
                <Route path={'/page/:id'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
