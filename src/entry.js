/*
 * @Date: 11/06/2021 18.25.29 +0800
 * @Author: KnowsCount
 * @LastEditTime: 13/06/2021 11.13.46 +0800
 * @FilePath: /qiokian/src/entry.js
 */
// iife/cjs usage extends esm default export - so import it all
import component, * as namedExports from '@/entry.esm'

// Attach named exports directly to component. IIFE/CJS will
// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)
Object.entries(namedExports).forEach(([exportName, exported]) => {
	if (exportName !== 'default') component[exportName] = exported
})

export default component
