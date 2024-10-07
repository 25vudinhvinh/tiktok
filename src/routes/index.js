import { HeaderOnly } from '~/components/Layout';
import {routes as routesConfig } from '~/configs/routes'

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// Neu khong duoc thi them dau ~ de route lai
const publicRouter = [
    {path: routesConfig.home , component: Home},
    {path: routesConfig.following, component: Following},
    {path: routesConfig.profile, component: Profile},
    {path: routesConfig.upload, component: Upload, layout: HeaderOnly},
    {path: routesConfig.search, component: Search, layout: null},
]

const privateRouter = [

]

export {privateRouter, publicRouter}