import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root,
.search-term__input,
.btn {
  color: ${({ theme }) => theme.rootText };
}

body {
  background: ${({ theme }) => theme.bodyBackground};
}

.search-term__input::placeholder {
  color: ${({ theme }) => theme.placeholderText};
}

.nav, .search-term__input,
.region-filter__selector, 
.region-filter__options,
.countries__card,
.btn {
  background-color: ${({ theme }) => theme.elementBackground};
  box-shadow: ${({ theme }) => theme.shadow};
} 
`

