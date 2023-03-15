const viewGenerator = require('./plop-templates/view/prompt')
const crudGenerator = require('./plop-templates/crud/prompt')
const componentGenerator = require('./plop-templates/component/prompt')
const mockGenerator = require('./plop-templates/mock/prompt')

module.exports = (plop) => {
  plop.setGenerator('view', viewGenerator)
  plop.setGenerator('curd', crudGenerator)
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('mock&api', mockGenerator)
}
