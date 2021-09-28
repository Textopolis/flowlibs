import Drawflow from 'drawflow'
import * as React from "react";
import styles from '../styles/Home.module.css'
import 'drawflow/dist/drawflow.min.css'

export default class DrawFlowCmp extends React.Component {

  constructor(props) {
    super();
    this.containerRef = React.createRef()
  }

  componentDidMount = async () => {
    // const editor = new Drawflow(this.containerRef.current);
    var id = document.getElementById("drawflow");
    const editor = new Drawflow(id); //(this.containerRef.current);
    // console.log('EDITOR' , editor)
    editor.reroute = true;
    global.showpopup= function (event){
      console.log(event.target);
      alert(event.target.textContent);
    }
    const dataToImport = {
      "drawflow": {
        "Home": {
          "data": {
            "6": {
              "id": 6,
              "name": "github",
              "data": {"name": "https://github.com/jerosoler/Drawflow"},
              "class": "github",
              "html": "\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-github \"></i> Github Stars</div>\n            <div class=\"box\">\n              <p>Enter repository url</p>\n            <input type=\"text\" df-name>\n            </div>\n          </div>\n          ",
              "typenode": false,
              "inputs": {},
              "outputs": {"output_1": {"connections": [{"node": "14", "output": "input_1"}]}},
              "pos_x": 200,
              "pos_y": 131
            },
            "14": {
              "id": 14,
              "name": "log",
              "data": {},
              "class": "log",
              "html": "\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-file-signature\"></i> Save log file </div>\n            </div>\n            ",
              "typenode": false,
              "inputs": {"input_1": {"connections": [{"node": "6", "input": "output_1"}]}},
              "outputs": {},
              "pos_x": 720,
              "pos_y": 186
            },
            "8": {
              "id": 8,
              "name": "personalized",
              "data": {},
              "class": "personalized",
              "html": "\n            <div>\n              Personalized\n            </div>\n            ",
              "typenode": false,
              "inputs": {
                "input_1": {
                  "connections": [{"node": "12", "input": "output_1"}, {
                    "node": "12",
                    "input": "output_2"
                  }, {"node": "12", "input": "output_3"}, {"node": "12", "input": "output_4"}]
                }
              },
              "outputs": {"output_1": {"connections": [{"node": "9", "output": "input_1"}]}},
              "pos_x": 764,
              "pos_y": 227
            },
            "9": {
              "id": 9,
              "name": "dbclick",
              "data": {"name": "Hello World!!"},
              "class": "dbclick",
              "html": "\n            <div>\n            <div class=\"title-box\"><i class=\"fas fa-mouse\"></i> Db Click</div>\n              <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n                Db Click here\n                <div class=\"modal\" style=\"display:none\">\n                  <div class=\"modal-content\">\n                    <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>\n                    Change your variable {name} !\n                    <input type=\"text\" df-name>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            ",
              "typenode": false,
              "inputs": {"input_1": {"connections": [{"node": "8", "input": "output_1"}]}},
              "outputs": {"output_1": {"connections": [{"node": "12", "output": "input_2"}]}},
              "pos_x": 209,
              "pos_y": 38
            },
            "12": {
              "id": 12,
              "name": "multiple",
              "data": {},
              "class": "multiple",
              "html": "\n            <div>\n              <div class=\"box\">\n                Multiple!\n              </div>\n            </div>\n            ",
              "typenode": false,
              "inputs": {
                "input_1": {"connections": []},
                "input_2": {"connections": [{"node": "9", "input": "output_1"}]},
                "input_3": {"connections": []}
              },
              "outputs": {
                "output_1": {"connections": [{"node": "8", "output": "input_1"}]},
                "output_2": {"connections": [{"node": "8", "output": "input_1"}]},
                "output_3": {"connections": [{"node": "8", "output": "input_1"}]},
                "output_4": {"connections": [{"node": "8", "output": "input_1"}]}
              },
              "pos_x": 179,
              "pos_y": 272
            }
          }
        }
      }
    }
    editor.start();
    // editor.addNode('NodeBox', 1, 1, 100, 150, "NodeBox", { name: ''}, 'NodeBox',false);
    // editor.addNode('NodeBox', 1, 1, 300, 200, "NodeBox", { name: ''}, 'NodeBox',false);
    console.log('DATA TO IMPORT', dataToImport);
    editor.import(dataToImport);
  }

  componentWillUnmount() {
    //this.diagramMaker.destroy();
  }

  render() {
    return (
      <div className={styles.container}>
        <div id="drawflow"/>
        the above div was missing css
      </div>

    )
  }
}