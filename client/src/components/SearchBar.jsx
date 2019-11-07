import React from 'react'
import { css } from 'emotion'
import { MdSearch } from 'react-icons/md'

export default function SearchBar() {
    return (
        <div className={css({ width: '250px', height: '50px', borderRadius: '6px', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 99})}>
          <input placeholder='Search location or pump' className={css({ color: '#082B84', fontWeight: 'bold', margin: '2%', border: 'none', outline: 'none', height: '100%', width: '100%', "::placeholder": { color: '#7E7E7E', fontWeight: '100'} })} />
          <MdSearch className={css({ margin: '2%', fontSize: '2.5rem', color: '#C7C9CF', paddingLeft: '5px', borderLeft: '2px solid #C7C9CF', height: '25px'})} />
        </div>
    )
}
