const LEVEL_BASIC = 0;
const LEVEL_INTERMEDIATE = 1;
const LEVEL_ADVANCED = 2;
const LEVEL_DEBUG = 3;

const CLASS_INPUT_ROW = "input_row";

class Condition {
    constructor() {

    }

    evaluate() {
        return true;
    }
}

class NotifyingCondition extends Condition{
    constructor(element_name, notification_element) {
        super();
        this.element_name = element_name;
        this.element = document.getElementById(element_name)
        this.notification_element = notification_element;
        this.element.addEventListener("change", (event) => {
            console.log("56465465", this.element_name, this.notification_element.name)
            this.notification_element.UpdateVisibility();
        });
    }
}

class ConditionRequiredValue extends NotifyingCondition {
    constructor(element_name, notification_element, required_value, require_exact) {
        super(element_name, notification_element);
        this.required_value = required_value;
        this.require_exact = require_exact;
        this.element = document.getElementById(element_name)
    }

    evaluate() {
        console.log("evaluate ConditionRequiredValue")
        console.log("element_name:", this.element_name)
        console.log("required_value:", this.required_value)
        console.log("require_exact:", this.require_exact)
        console.log("value:", this.element.value)
        var value = this.element.value;
        var result = this.require_exact ? value == this.required_value : value >= this.required_value;
        console.log("result:", result)
        return result;
    }
}

class MultiCondition extends Condition {
    constructor() {
        super();
        this.list_conditions = []
    }

    evaluate() {
        return true;
    }

    add_condition(condition) {
        this.list_conditions.push(condition)
    }
}

class AndCondition extends MultiCondition {
    constructor() {
        super();
    }

    evaluate() {
        console.log("evaluate AndCondition")
        for (var index = 0; index < this.list_conditions.length; index++) {
            console.log("index: ", index)
            const condition = this.list_conditions[index];
            var tmp = condition.evaluate()
            if( ! tmp){
                console.log("result of AndCondition: false")
                return false;
            }
        }
        console.log("result of AndCondition: true")
        return true;
    }
}

class OrCondition extends MultiCondition {
    constructor() {
        super();
    }

    evaluate() {
        console.log("evaluate OrCondition")
        for (var index = 0; index < this.list_conditions.length; index++) {
            console.log("index: ", index)
            const condition = this.list_conditions[index];
            var tmp = condition.evaluate()
            if(tmp){
                console.log("result of OrCondition: true")
                return true;
            }
        }
        console.log("result of OrCondition: false")
        return false;
    }
}

class MultiConditionalElement {
    constructor(name) {
        this.name = name;
        this.element = document.getElementById(name)
    }

    set_condition(condition) {
        this.condition = condition
    }

    evaluate() {
        console.log("evaluate MultiConditionalElement")
        return this.condition.evaluate();
    }

    UpdateVisibility() {
        console.log("UpdateVisibility MultiConditionalElement")
        var visible = this.evaluate();
        this.element.className = visible ? this.get_visible_name() : "hidden";
    }

    get_visible_name() {
        console.error("error: MultiConditionalElement: get_visible_name")
        return "";
    }
}

class MultiConditionalInputRow extends MultiConditionalElement {
    constructor(name) {
        super(name);
    }

    get_visible_name() {
        return "input_row";
    }
}

class InputRow {
    constructor(name, required_level, require_exact) {
        this.name = name;
        this.required_level = required_level;
        this.require_exact = require_exact;
        this.element = document.getElementById(name)
    }

    UpdateVisibility(level) {
        var visible = this.require_exact ? level == this.required_level : level >= this.required_level;
        this.element.className = visible ? "input_row" : "hidden";
    }
}

class Show {
    constructor(name, required_level, require_exact) {
        this.name = name;
        this.required_level = required_level;
        this.require_exact = require_exact;
        this.element = document.getElementById(name)
    }

    UpdateVisibility(level) {
        var visible = this.require_exact ? level == this.required_level : level >= this.required_level;
        this.element.className = visible ? "show" : "hidden";
    }
}

class HideGroup {
    constructor(select_name) {
        this.list_input_row = [];
        this.list_show = [];
        this.select = document.getElementById(select_name);
        this.select.addEventListener("change", (event) => {
            this.UpdateVisibility();
        });
    }

    UpdateVisibility() {
        var level = this.select.value;
        console.log("change: ", level);
        for (var i = 0; i < this.list_input_row.length; i++) {
            this.list_input_row[i].UpdateVisibility(level);
        }
        for (var i = 0; i < this.list_show.length; i++) {
            this.list_show[i].UpdateVisibility(level);
        }
    }

    AddInputRow(input_row_name, level, require_exact) {
        this.list_input_row.push(new InputRow(input_row_name, level, require_exact));
    }

    AddShow(show_name, level, require_exact) {
        this.list_show.push(new Show(show_name, level, require_exact));
    }
}

class HideManager {
    constructor() {
        this.groups = [];
        this.multi_consodtional_elements = []

        //---------- groups ----------

        this.group_data = new HideGroup("select_data_paramaters_mode");
        this.group_data.AddInputRow("input_row_duplicator_iterations", LEVEL_DEBUG, false);
        this.group_data.AddInputRow("input_row_data_step_size", LEVEL_ADVANCED, false);
        this.groups.push(this.group_data);

        this.group_settings = new HideGroup("select_settings_mode");
        this.group_settings.AddInputRow("input_row_bounding_axes_length", LEVEL_ADVANCED, false);
        this.group_settings.AddInputRow("input_row_bounding_axes_radius", LEVEL_ADVANCED, false);
        this.group_settings.AddInputRow("input_row_emphasize_origin_axes", LEVEL_ADVANCED, false);
        this.group_settings.AddInputRow("input_row_bounding_axes_origin_length", LEVEL_ADVANCED, false);
        this.group_settings.AddInputRow("input_row_bounding_axes_origin_radius", LEVEL_ADVANCED, false);
        this.group_settings.AddInputRow("input_row_volume_rendering_max_distance", LEVEL_INTERMEDIATE, false);
        this.group_settings.AddInputRow("input_row_volume_rendering_distance_between_points", LEVEL_ADVANCED, false);
        this.group_settings.AddInputRow("input_row_volume_rendering_termination_opacity", LEVEL_ADVANCED, false);
        this.group_settings.AddInputRow("input_row_still_resolution_factor", LEVEL_ADVANCED, false);
        this.group_settings.AddInputRow("input_row_panning_resolution_factor", LEVEL_ADVANCED, false);
        this.group_settings.AddInputRow("input_row_lod_still", LEVEL_ADVANCED, false);
        this.group_settings.AddInputRow("input_row_lod_panning", LEVEL_ADVANCED, false);
        this.groups.push(this.group_settings);

        this.group_shading_mode = new HideGroup("select_shading_mode_streamlines");
        this.group_shading_mode.AddInputRow("input_row_formula_scalar", SHADING_MODE_STREAMLINES_SCALAR, true);
        this.group_shading_mode.AddInputRow("input_row_scalar_range", SHADING_MODE_STREAMLINES_SCALAR, true);
        this.groups.push(this.group_shading_mode);

        this.group_side_canvas = new HideGroup("select_side_mode");
        this.group_side_canvas.AddShow("show_side_canvas", 1, false);
        this.group_side_canvas.AddShow("show_projection_index", DRAW_MODE_PROJECTION, true);
        this.group_side_canvas.AddShow("show_slice_axes_order", DRAW_MODE_FTLE_SLICE, true);
        this.group_side_canvas.AddShow("show_side_canvas_streamline_method", DRAW_MODE_DEFAULT, true);
        this.group_side_canvas.AddShow("show_side_canvas_streamline_method_projection", DRAW_MODE_PROJECTION, true);
        this.groups.push(this.group_side_canvas);

        //---------- special conditions ----------

        this.mcir_scalar_field_debug = new MultiConditionalInputRow("input_row_scalar_field_debug");
        this.condition_debug = new ConditionRequiredValue("select_settings_mode",
            this.mcir_scalar_field_debug,
            LEVEL_DEBUG, false);
        this.condition_scalar = new ConditionRequiredValue("select_shading_mode_streamlines",
            this.mcir_scalar_field_debug,
            SHADING_MODE_STREAMLINES_SCALAR, true);
        this.condition_and = new AndCondition();
        this.condition_and.add_condition(this.condition_debug)
        this.condition_and.add_condition(this.condition_scalar)
        this.mcir_scalar_field_debug.set_condition(this.condition_and)
        this.multi_consodtional_elements.push(this.mcir_scalar_field_debug);


    }

    UpdateVisibility() {
        for (var i = 0; i < this.groups.length; i++) {
            this.groups[i].UpdateVisibility();
        }
        for (var i = 0; i < this.multi_consodtional_elements.length; i++) {
            this.multi_consodtional_elements[i].UpdateVisibility();
        }
    }
}


module.exports = HideManager;