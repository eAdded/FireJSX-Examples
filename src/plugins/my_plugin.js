exports.default = function ({onBuild}){
    onBuild('content.jsx',({renderPage})=>{
        renderPage('/content',{
            heading : "hello"
        })
    })
}
