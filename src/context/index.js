import React from 'react'
//EL USE CONTEXT es una de los metodos más importantes de esta APP, ya que muchos componentes no se actualizaban
// al utilizar el CONTEXT  estos se actualizan si necesidad de manipular el dom con useState 
// usercontext almacena los parametros ( user y setUser)
// UN BUG pasó cuando teniamos LOGIN y al logearnos no desaparecia se mantenía rederizado y no se actualizaba es alli donde utilizamos el context
export const UserContext = React.createContext();
export const SearchContext = React.createContext();