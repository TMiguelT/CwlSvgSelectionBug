import {WorkflowFactory} from "cwlts/models";
import {Workflow, SelectionPlugin, SVGArrangePlugin} from "cwl-svg";

import "cwl-svg/src/assets/styles/themes/rabix-dark/theme";
import "cwl-svg/src/plugins/selection/theme.dark.scss";

import fastqc from "cwl-svg/cwl-samples/fastqc";

const svgRoot = document.getElementById("svg");
const workflow = new Workflow({
    model: WorkflowFactory.from(fastqc),
    svgRoot: svgRoot,
    plugins: [
        new SelectionPlugin(),
        new SVGArrangePlugin()
    ]
});
workflow.getPlugin(SVGArrangePlugin).arrange();

// Listen for button click
document
    .getElementById('replace')
    .addEventListener('click', () => {
        workflow.destroy();
        workflow.draw();
        workflow.getPlugin(SVGArrangePlugin).arrange();
    });
