import { useState } from 'react';
import { FaFilter} from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";

import FilterForm from '@/components/FilterForm'
import { Header, HeaderContent, Logo, FilterButton } from './styles'

export default function H() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation()

  return (
      <Header>
        <HeaderContent>
          <Link to='/' className="main_logo">
            <Logo width="180" />
          </Link>
          <FilterButton className="filter_button" type="button" show={pathname === '/'} onClick={() => setShow(true)}>
            <FaFilter/>
          </FilterButton>
        </HeaderContent>
        <FilterForm show={show} close={() => setShow(false)} />
      </Header>
  );
}