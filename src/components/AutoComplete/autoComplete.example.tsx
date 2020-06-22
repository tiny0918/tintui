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

const city = ['hefei', 'nanjing', 'beijing', 'shanghai', 'guangzhou',
  'hangzhou', 'xian', 'zhenzhou', 'kunming', 'shenyang', 'tianjing', 'wuhan']
const handleFetch1 = (query: string) => {
    return city.filter(name => name.includes(query)).map(name => ({value: name}))
  }

const AutocompleteExample = () => {
	return (
		<AutoComplete 
		  fetchSuggestions={handleFetch1}
		  onSelect={action('selected')}
		  placeholder="输入省会城市首字母试试"
		/>
	  )
};
export default AutocompleteExample;

const citysWithNumber = [
	{value: 'hefei', number: '安徽-合肥'},
	  {value: 'nanjing', number: '江苏-南京'},
	  {value: 'beijing', number: '北京-北京'},
	  {value: 'shanghai', number: '上海-上海'},
	  {value: 'guangzhou', number: '广东-广州'},
	  {value: 'hangzhou', number: '浙江-杭州'},
	  {value: 'xian', number: '陕西-西安'},
	  {value: 'zhenzhou', number: '深圳-深圳'},
	  {value: 'kunming', number: '云南-昆明'},
	  {value: 'shenyang', number: '辽宁-沈阳'}
  ] 
  const handleFetch2 = (query: string) => {
	  return citysWithNumber.filter(city => city.value.includes(query))
	}
	const renderOption2 = (item: DataSourceType) => {
	  const itemWithNumber = item as DataSourceType<LakerPlayerProps>
	  return (
		  <span>{itemWithNumber.number}</span>
	  )
	}
const ToUseTemplete = () => {
	return (
		<AutoComplete 
		  fetchSuggestions={handleFetch2}
		  onSelect={action('selected')}
		  placeholder="输入省会城市首字母，自定义下拉模板"
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
