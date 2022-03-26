var ele = document.createElement('div');
ele.innerHTML = 'Dibujo de los nodos del DOM<p>(por tipo de nodo)</p>';
document.body.appendChild(ele);
function print(node) {
    document.write(node.nodeName)
    let nodosHijos = node.childNodes;
    for (var i = 0; i < nodosHijos.length; i++) {

        print(nodosHijos[i]);
    }
}
print(document);
