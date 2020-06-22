import React from "react";
import { action } from '@storybook/addon-actions'
import { AutoComplete, DataSourceType } from './autoComplete'
interface LakerPlayerProps {
  value: string;
  number: number;
}
interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
  'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
const handleFetch1 = (query: string) => {
    return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
  }

const AutocompleteExample = () => {
	return (
		<AutoComplete 
		  fetchSuggestions={handleFetch1}
		  onSelect={action('selected')}
		  placeholder="输入湖人队球员英文名试试"
		/>
	  )
};
export default AutocompleteExample;

const lakersWithNumber = [
    {value: 'bradley', number: 11},
    {value: 'pope', number: 1},
    {value: 'caruso', number: 4},
    {value: 'cook', number: 2},
    {value: 'cousins', number: 15},
    {value: 'james', number: 23},
    {value: 'AD', number: 3},
    {value: 'green', number: 14},
    {value: 'howard', number: 39},
    {value: 'kuzma', number: 0},
  ] 
  const handleFetch2 = (query: string) => {
    return lakersWithNumber.filter(player => player.value.includes(query))
  }
  const renderOption2 = (item: DataSourceType) => {
    const itemWithNumber = item as DataSourceType<LakerPlayerProps>
    return (
      <>
        <b>名字: {itemWithNumber.value}</b>
        <span>球衣号码: {itemWithNumber.number}</span>
      </>
    )
  }
const ToUseTemplete = () => {
	return (
		<AutoComplete 
		  fetchSuggestions={handleFetch2}
		  onSelect={action('selected')}
		  placeholder="输入湖人队球员英文,自定义下拉模版"
		  renderOption={renderOption2}
		/>
	  )
};
export { ToUseTemplete };

const handleFetch3 = (query: string) => {
	return fetch(`https://api.github.com/search/users?q=${query}`)
	.then(res => res.json())
	.then(({ items }) => {
		return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
	})
}

const renderOption3 = (item: DataSourceType) => {
	const itemWithGithub = item as DataSourceType<GithubUserProps>
	return (
	<>
		<b>Name: {itemWithGithub.value}</b>
		<span>url: {itemWithGithub.url}</span>
	</>
	)
}

export const AsyncTest = () => {
	return (
		<AutoComplete 
		  fetchSuggestions={handleFetch3}
		  placeholder="输入 Github 用户名试试"
		  onSelect={action('selected')}
		  renderOption={renderOption3}
		/>
	  )
};
