const DummyQuad = require("./dummy_quad");
const RenderWrapper = require("./render_wrapper");
const ShaderUniforms = require("./shader_uniforms");
const module_webgl = require("./webgl");
const loadShaderProgramFromCode = module_webgl.loadShaderProgramFromCode;

class UniformLocationsRayTracing {
    constructor(gl, program, name) {
        console.log("UniformLocationsRayTracing: ", name)
        this.location_color_r = gl.getUniformLocation(program, "color_r");
        this.location_texture_float = gl.getUniformLocation(program, "texture_float");
        this.location_texture_int = gl.getUniformLocation(program, "texture_int");
        this.location_texture_float_global = gl.getUniformLocation(program, "texture_float_global");
        this.location_texture_int_global = gl.getUniformLocation(program, "texture_int_global");
        this.location_texture_ftle = gl.getUniformLocation(program, "texture_ftle");
        this.location_texture_ftle_differences = gl.getUniformLocation(program, "texture_ftle_differences");
        this.location_width = gl.getUniformLocation(program, "width");
        this.location_height = gl.getUniformLocation(program, "height");
        this.location_offset_x = gl.getUniformLocation(program, "offset_x");
        this.location_offset_y = gl.getUniformLocation(program, "offset_y");
        this.location_max_ray_distance = gl.getUniformLocation(program, "maxRayDistance");
        this.location_max_volume_distance = gl.getUniformLocation(program, "max_volume_distance");
        this.location_max_iteration_count = gl.getUniformLocation(program, "maxIterationCount");
        this.location_tube_radius = gl.getUniformLocation(program, "tubeRadius");
        this.location_fog_density = gl.getUniformLocation(program, "fog_density");
        this.location_fog_type = gl.getUniformLocation(program, "fog_type");
        this.location_projection_index = gl.getUniformLocation(program, "projection_index");
        this.location_shading_mode_streamlines = gl.getUniformLocation(program, "shading_mode_streamlines");
        this.location_min_scalar = gl.getUniformLocation(program, "min_scalar");
        this.location_max_scalar = gl.getUniformLocation(program, "max_scalar");
        this.location_cut_at_cube_faces = gl.getUniformLocation(program, "cut_at_cube_faces");
        this.location_handle_inside = gl.getUniformLocation(program, "handle_inside");
        this.location_is_main_renderer = gl.getUniformLocation(program, "is_main_renderer");
        this.location_show_bounding_box = gl.getUniformLocation(program, "show_bounding_box");
        this.location_show_movable_axes = gl.getUniformLocation(program, "show_movable_axes");
        this.location_show_origin_axes = gl.getUniformLocation(program, "show_origin_axes");
        this.location_show_streamlines = gl.getUniformLocation(program, "show_streamlines");
        this.location_show_streamlines_outside = gl.getUniformLocation(program, "show_streamlines_outside");
        this.location_show_volume_rendering = gl.getUniformLocation(program, "show_volume_rendering");
        this.location_volume_rendering_distance_between_points = gl.getUniformLocation(program, "volume_rendering_distance_between_points");
        this.location_volume_rendering_termination_opacity = gl.getUniformLocation(program, "volume_rendering_termination_opacity");
        
        
        this.location_dim_x = gl.getUniformLocation(program, "dim_x");
        this.location_dim_y = gl.getUniformLocation(program, "dim_y");
        this.location_dim_z = gl.getUniformLocation(program, "dim_z");
        this.location_min_scalar_ftle = gl.getUniformLocation(program, "min_scalar_ftle");
        this.location_max_scalar_ftle = gl.getUniformLocation(program, "max_scalar_ftle");  
        this.location_transfer_function_index_streamline_scalar = gl.getUniformLocation(program, "transfer_function_index_streamline_scalar");
        this.location_transfer_function_index_ftle_forward = gl.getUniformLocation(program, "transfer_function_index_ftle_forward");
        this.location_transfer_function_index_ftle_backward = gl.getUniformLocation(program, "transfer_function_index_ftle_backward");
                
    }
}

class UniformLocationsAverage {
    constructor(gl, program, name) {
        console.log("UniformLocationsAverage: ", name)
        this.location_aliasing_index = gl.getUniformLocation(program, "aliasing_index");
        this.location_texture1 = gl.getUniformLocation(program, "texture1");
        this.location_texture2 = gl.getUniformLocation(program, "texture2");
        this.location_width = gl.getUniformLocation(program, "width");
        this.location_height = gl.getUniformLocation(program, "height");
    }
}

class UniformLocationsCopy {
    constructor(gl, program, name) {
        console.log("UniformLocationsCopy: ", name)
        this.location_color_r = gl.getUniformLocation(program, "color_r");
        this.location_texture1 = gl.getUniformLocation(program, "texture1");
        this.location_width = gl.getUniformLocation(program, "width");
        this.location_height = gl.getUniformLocation(program, "height");
    }
}

class UniformLocationsResampling {
    constructor(gl, program, name) {
        console.log("UniformLocationsResampling: ", name)
        this.location_show_progressbar = gl.getUniformLocation(program, "show_progressbar");
        this.location_progress = gl.getUniformLocation(program, "progress");
        this.location_texture1 = gl.getUniformLocation(program, "texture1");
        this.location_texture2 = gl.getUniformLocation(program, "texture2");
        this.location_texture_float_global = gl.getUniformLocation(program, "texture_float_global");
        this.location_texture_int_global = gl.getUniformLocation(program, "texture_int_global");
        this.location_width = gl.getUniformLocation(program, "width");
        this.location_height = gl.getUniformLocation(program, "height");
        this.location_render_color_bar = gl.getUniformLocation(program, "render_color_bar");
    }
}

class UniformLocationsFTLESlice {
    constructor(gl, program, name) {
        console.log("UniformLocationsFTLESlice: ", name)
        this.location_width = gl.getUniformLocation(program, "width");
        this.location_height = gl.getUniformLocation(program, "height");
        this.location_dim_x = gl.getUniformLocation(program, "dim_x");
        this.location_dim_y = gl.getUniformLocation(program, "dim_y");
        this.location_dim_z = gl.getUniformLocation(program, "dim_z");
        this.location_texture_flow_map = gl.getUniformLocation(program, "texture_flow_map");
        this.location_texture_ftle_differences = gl.getUniformLocation(program, "texture_ftle_differences");
        this.location_texture_float_global = gl.getUniformLocation(program, "texture_float_global");
        this.location_texture_int_global = gl.getUniformLocation(program, "texture_int_global");
        this.location_slice_index = gl.getUniformLocation(program, "slice_index");
        this.location_draw_slice_axes_order = gl.getUniformLocation(program, "draw_slice_axes_order");       
        this.location_draw_slice_mode = gl.getUniformLocation(program, "draw_slice_mode");                
        this.location_min_scalar = gl.getUniformLocation(program, "min_scalar");
        this.location_max_scalar = gl.getUniformLocation(program, "max_scalar");
        this.location_render_color_bar = gl.getUniformLocation(program, "render_color_bar");
        this.location_transfer_function_index = gl.getUniformLocation(program, "transfer_function_index");
        this.location_transfer_function_index_backward = gl.getUniformLocation(program, "transfer_function_index_backward");    
        this.location_interpolate = gl.getUniformLocation(program, "interpolate");    
        
    }
}

class CanvasWrapper {

    constructor(gl, streamline_context_static, ftle_manager, name, canvas, canvas_width, canvas_height, camera, aliasing, shader_manager, global_data) {
        console.log("Construct CanvasWrapper: ", name)
        this.name = name;
        this.canvas = canvas;
        this.canvas_width = canvas_width;
        this.canvas_height = canvas_height;
        this.camera = camera;
        this.aliasing = aliasing;
        this.shader_manager = shader_manager;
        this.global_data = global_data;
        this.p_streamline_context_static = streamline_context_static;
        this.p_ftle_manager = ftle_manager;
        this.aliasing_index = 0;
        this.max_ray_distance = 0;
        this.tube_radius = 1.0;
        this.tube_radius_projection = 1.0;
        this.lod_index_panning = 0;
        this.lod_index_still = 0;
        this.fog_density = 0;
        this.fog_type = 0;
        this.shading_mode_streamlines = 0;
        this.projection_index = -1;
        this.streamline_method = STREAMLINE_DRAW_METHOD_FUNDAMENTAL;
        this.limited_max_distance = 0;
        this.max_iteration_count = 1;
        this.min_scalar = 0;
        this.max_scalar = 0;
        this.show_bounding_box = false;
        this.show_movable_axes = false;
        this.show_origin_axes = false;
        this.draw_mode = DRAW_MODE_DEFAULT;
        this.draw_slice_index = 0;
        this.draw_slice_axes_order = DRAW_SLICE_AXES_ORDER_HX_VY;
        this.draw_slice_mode = DRAW_SLICE_MODE_COMBINED;
        this.ftle_transfer_function_index = 2;
        this.ftle_transfer_function_index_backward = 3;
        this.ftle_min_scalar = 0;
        this.ftle_max_scalar = 1;
        this.ftle_slice_interpolate = true;
        this.show_volume_rendering = false;
        this.volume_rendering_distance_between_points = 0.01;
        this.volume_rendering_termination_opacity = 0.99;
        this.transfer_function_index_streamline_scalar = 0;
        this.transfer_function_index_ftle_forward = 2;
        this.transfer_function_index_ftle_backward = 3;
        this.max_volume_distance = 0;// 0=same as limited_max_distance
        
        this.render_wrapper_raytracing_still_left = new RenderWrapper(gl, name + "_raytracing_still_left", camera.width_still, camera.height_still);
        this.render_wrapper_raytracing_still_right = new RenderWrapper(gl, name + "_raytracing_still_right", camera.width_still, camera.height_still);
        this.render_wrapper_raytracing_panning_left = new RenderWrapper(gl, name + "_raytracing_panning_left", camera.width_panning, camera.height_panning);
        this.render_wrapper_raytracing_panning_right = new RenderWrapper(gl, name + "_raytracing_panning_right", camera.width_panning, camera.height_panning);

        console.log("CanvasWrapper: ", name, "create program")
        console.log("CanvasWrapper gl: ", gl)

        //this.InitializeShaders(gl);

        //this.GenerateDummyBuffer(gl);
        this.dummy_quad = new DummyQuad(gl);
    }

    InitializeShaders(gl){
        this.program_raytracing = gl.createProgram();
        loadShaderProgramFromCode(gl, this.program_raytracing, V_SHADER_RAYTRACING, this.shader_manager.GetDefaultShader());
        this.location_raytracing = new UniformLocationsRayTracing(gl, this.program_raytracing);
        this.shader_uniforms_raytracing = this.loadShaderUniformsRayTracing(gl, this.program_raytracing);
        this.attribute_location_dummy_program_raytracing = gl.getAttribLocation(this.program_raytracing, "a_position");

        this.program_average = gl.createProgram();
        loadShaderProgramFromCode(gl, this.program_average, V_SHADER_RAYTRACING, F_SHADER_AVERAGE);
        this.location_average = new UniformLocationsAverage(gl, this.program_average);
        this.shader_uniforms_average = this.loadShaderUniformsAverage(gl, this.program_average);
        this.attribute_location_dummy_program_average = gl.getAttribLocation(this.program_average, "a_position");

        this.program_copy = gl.createProgram();
        loadShaderProgramFromCode(gl, this.program_copy, V_SHADER_RAYTRACING, F_SHADER_COPY);
        this.location_copy = new UniformLocationsCopy(gl, this.program_copy);
        this.shader_uniforms_copy = this.loadShaderUniformsCopy(gl, this.program_copy);
        this.attribute_location_dummy_program_copy = gl.getAttribLocation(this.program_copy, "a_position");

        this.program_resampling = gl.createProgram();
        loadShaderProgramFromCode(gl, this.program_resampling, V_SHADER_RAYTRACING, F_SHADER_RESAMPLING);
        this.location_resampling = new UniformLocationsResampling(gl, this.program_resampling);
        this.shader_uniforms_resampling = this.loadShaderUniformsResampling(gl, this.program_resampling);
        this.attribute_location_dummy_program_resampling = gl.getAttribLocation(this.program_resampling, "a_position");

        this.program_ftle_slice = gl.createProgram();
        loadShaderProgramFromCode(gl, this.program_ftle_slice, V_SHADER_RAYTRACING, F_SHADER_FLOW_MAP_SLICE);
        this.location_ftle_slice = new UniformLocationsFTLESlice(gl, this.program_ftle_slice);
        this.shader_uniforms_ftle_slice = this.loadShaderUniformsFTLESlice(gl, this.program_ftle_slice);
        this.attribute_location_dummy_program_ftle_slice = gl.getAttribLocation(this.program_ftle_slice, "a_position");
    }

    ReplaceRaytracingShader(gl, shader_formula_scalar) {
        console.log("ReplaceRaytracingShader");
        this.program_raytracing = gl.createProgram();
        loadShaderProgramFromCode(gl, this.program_raytracing, V_SHADER_RAYTRACING, this.shader_manager.GetShader(shader_formula_scalar));
        this.location_raytracing = new UniformLocationsRayTracing(gl, this.program_raytracing);
        this.shader_uniforms_raytracing = this.loadShaderUniformsRayTracing(gl, this.program_raytracing);
        this.attribute_location_dummy_program_raytracing = gl.getAttribLocation(this.program_raytracing, "a_position");
    }

    CalculateLimitedMaxRayDistance() {
        var d = this.fog_density;
        this.limited_max_distance = this.max_ray_distance;
        if (this.fog_type == FOG_EXPONENTIAL) {
            this.limited_max_distance = Math.min(this.max_ray_distance, 6.90776 / d);//js allows division by zero;
        }
        else if (this.fog_type == FOG_EXPONENTIAL_SQUARED) {
            //see https://www.wolframalpha.com/input/?i=e%5E%28-%28d*z%29%5E2%29+%3E+0.001
            this.limited_max_distance = Math.min(this.max_ray_distance, 2.62826 * Math.sqrt(1 / (d * d)));//js allows division by zero;
        }
    }

    SetRenderSizes(width, height, width_panning, height_panning) {
        this.camera.SetRenderSizes(width, height, width_panning, height_panning);
    }

    SetCanvasSize(width, height) {

    }

    ShouldRenderColorBar() {
        return this.shading_mode_streamlines == SHADING_MODE_STREAMLINES_SCALAR;
    }

    UpdateResolutionFactor(gl, still_resolution_factor, panning_resolution_factor) {
        var width_still = Math.round(this.camera.width_original * still_resolution_factor);
        var height_still = Math.round(this.camera.height_original * still_resolution_factor);
        var width_panning = Math.round(this.camera.width_original * panning_resolution_factor);
        var height_panning = Math.round(this.camera.height_original * panning_resolution_factor);

        var changed = (width_still != this.camera.width_still) || (height_still != this.camera.height_still);
        if (changed) {
            this.camera.width_still = width_still;
            this.camera.height_still = height_still;
            this.render_wrapper_raytracing_still_left.resize(gl, width_still, height_still);
            this.render_wrapper_raytracing_still_right.resize(gl, width_still, height_still);
            this.camera.SetCorrectResolution();
        }

        var changed = (width_panning != this.camera.width_panning) || (height_panning != this.camera.height_panning);
        if (changed) {
            this.camera.width_panning = width_panning;
            this.camera.height_panning = height_panning;
            this.render_wrapper_raytracing_panning_left.resize(gl, width_panning, height_panning);
            this.render_wrapper_raytracing_panning_right.resize(gl, width_panning, height_panning);
            this.camera.SetCorrectResolution();
        }

    }

    draw(gl, data_changed, settings_changed, mouse_in_canvas) {
        if (this.camera.changed || data_changed || settings_changed)
            this.aliasing_index = 0;

        if (this.aliasing_index == this.aliasing.num_rays_per_pixel)
            return;

        if (this.aliasing_index > 0 && !mouse_in_canvas)
            return;

        //console.log("aliasing_index: ", this.aliasing_index, "panning:", this.camera.panning);
        //console.log("offset_x: ", this.aliasing.offset_x[this.aliasing_index]);
        //console.log("offset_y: ", this.aliasing.offset_y[this.aliasing_index]);
        //console.log("draw CanvasWrapper: ", this.name);
        //console.log("CanvasWrapper gl: ", gl)
        //console.log("CanvasWrapper canvas: ", this.canvas)
        var left_render_wrapper = this.camera.IsPanningOrForced() ? this.render_wrapper_raytracing_panning_left : this.render_wrapper_raytracing_still_left

        switch (this.draw_mode) {
            case DRAW_MODE_DEFAULT:
                this.draw_mode_raytracing(gl, left_render_wrapper);
                break;
            case DRAW_MODE_FTLE_SLICE:
                this.draw_mode_ftle_slice(gl, left_render_wrapper);
                break;
            case DRAW_MODE_PROJECTION:
                this.draw_mode_raytracing(gl, left_render_wrapper);
                break;
            default:
                console.log("DRAW MODE ERROR", this.draw_mode);
                break;
        }

        this.aliasing_index += 1;
    }

    set_draw_mode(draw_mode, projection_index, streamline_method) {
        if (this.draw_mode == draw_mode && this.projection_index == projection_index && this.streamline_method == streamline_method)
            return;
        console.log("change draw mode: ", draw_mode, projection_index, streamline_method);
        this.draw_mode = draw_mode;
        this.projection_index = projection_index;
        this.streamline_method = streamline_method;
        this.aliasing_index = 0;
        this.camera.changed = true;

        var save_old_state = true;
        switch (this.draw_mode) {
            case DRAW_MODE_DEFAULT:
                this.camera.loadState("state_default", save_old_state);
                break;
            case DRAW_MODE_FTLE_SLICE:
                break;
            case DRAW_MODE_PROJECTION:
                switch (this.projection_index) {
                    case 0:
                        this.camera.loadState("state_projection_x", save_old_state);
                        break;
                    case 1:
                        this.camera.loadState("state_projection_y", save_old_state);
                        break;
                    case 2:
                        this.camera.loadState("state_projection_z", save_old_state);
                        break;
                    default:
                        console.warn("PROJECTION INDEX ERROR", this.projection_index);
                        break;
                }
                break;
            default:
                console.warn("DRAW MODE ERROR", this.draw_mode);
                break;
        }
    }

    draw_mode_raytracing(gl, left_render_wrapper) {
        this.drawTextureRaytracing(gl, left_render_wrapper);
        this.drawTextureAverage(gl, left_render_wrapper);
        this.drawResampling(gl, left_render_wrapper);
        this.drawTextureSumCopy(gl, left_render_wrapper);
    }

    draw_mode_ftle_slice(gl, left_render_wrapper) {
        this.drawFTLESlice(gl, left_render_wrapper);
    }

    drawTextureRaytracing(gl, render_wrapper, width, height) {
        var projection_index = -1;
        var max_iteration_count = this.max_iteration_count;
        var tube_radius_projection = this.tube_radius;

        var show_streamlines = false;
        var show_streamlines_outside = false;
        switch (this.streamline_method) {
            case STREAMLINE_DRAW_METHOD_FUNDAMENTAL:
                show_streamlines = true;
                break;
            case STREAMLINE_DRAW_METHOD_R3:
                show_streamlines_outside = true;
                break;
            case STREAMLINE_DRAW_METHOD_BOTH:
                show_streamlines = true;
                show_streamlines_outside = true;
                break;
            default:
                break;
        }

        if(this.draw_mode == DRAW_MODE_PROJECTION){
            projection_index = this.projection_index;
            max_iteration_count = 1000;
            tube_radius_projection = this.tube_radius_projection;
        }

        gl.bindFramebuffer(gl.FRAMEBUFFER, render_wrapper.frame_buffer);
        //gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, this.camera.width, this.camera.height);
        //console.log(this.camera.width, this.camera.height);
        gl.useProgram(this.program_raytracing);
        this.camera.WriteToUniform(gl, this.program_raytracing, "active_camera");
        //gl.uniform1f(this.location_raytracing.location_color_r, 0.5 + 0.5 * Math.sin(2 * Math.PI * x));
        gl.uniform1i(this.location_raytracing.location_width, this.camera.width);
        gl.uniform1i(this.location_raytracing.location_height, this.camera.height);
        gl.uniform1i(this.location_raytracing.location_max_iteration_count, max_iteration_count);

        gl.uniform1f(this.location_raytracing.location_offset_x, this.aliasing.offset_x[this.aliasing_index]);
        gl.uniform1f(this.location_raytracing.location_offset_y, this.aliasing.offset_y[this.aliasing_index]);
        gl.uniform1f(this.location_raytracing.location_max_ray_distance, this.limited_max_distance);
        gl.uniform1f(this.location_raytracing.location_max_volume_distance, this.max_volume_distance == 0 ? this.limited_max_distance : this.max_volume_distance);
        gl.uniform1f(this.location_raytracing.location_tube_radius, tube_radius_projection);
        gl.uniform1f(this.location_raytracing.location_fog_density, this.fog_density);
        gl.uniform1i(this.location_raytracing.location_fog_type, this.fog_type);
        gl.uniform1i(this.location_raytracing.location_projection_index, projection_index);
        gl.uniform1i(this.location_raytracing.location_shading_mode_streamlines, this.shading_mode_streamlines);
        gl.uniform1f(this.location_raytracing.location_min_scalar, this.min_scalar);
        gl.uniform1f(this.location_raytracing.location_max_scalar, this.max_scalar);

        gl.uniform1i(this.location_raytracing.location_cut_at_cube_faces, this.cut_at_cube_faces);
        gl.uniform1i(this.location_raytracing.location_handle_inside, this.handle_inside);
        gl.uniform1i(this.location_raytracing.location_is_main_renderer, this.is_main_renderer);
        gl.uniform1i(this.location_raytracing.location_show_bounding_box, this.show_bounding_box);
        gl.uniform1i(this.location_raytracing.location_show_movable_axes, this.show_movable_axes);
        gl.uniform1i(this.location_raytracing.location_show_origin_axes, this.show_origin_axes);
        gl.uniform1i(this.location_raytracing.location_show_streamlines, show_streamlines);
        gl.uniform1i(this.location_raytracing.location_show_streamlines_outside, show_streamlines_outside);

        

        gl.uniform1i(this.location_raytracing.location_show_volume_rendering, this.show_volume_rendering);
        gl.uniform1f(this.location_raytracing.location_volume_rendering_distance_between_points, this.volume_rendering_distance_between_points);
        gl.uniform1f(this.location_raytracing.location_volume_rendering_termination_opacity, this.volume_rendering_termination_opacity);
        
        gl.uniform1i(this.location_raytracing.location_dim_x, this.p_ftle_manager.dim_x);
        gl.uniform1i(this.location_raytracing.location_dim_y, this.p_ftle_manager.dim_y);
        gl.uniform1i(this.location_raytracing.location_dim_z, this.p_ftle_manager.dim_z);
        gl.uniform1f(this.location_raytracing.location_min_scalar_ftle, this.p_ftle_manager.ftle_min_value);
        gl.uniform1f(this.location_raytracing.location_max_scalar_ftle, this.p_ftle_manager.ftle_max_value);
        gl.uniform1i(this.location_raytracing.location_transfer_function_index_streamline_scalar, this.transfer_function_index_streamline_scalar);
        gl.uniform1i(this.location_raytracing.location_transfer_function_index_ftle_forward, this.transfer_function_index_ftle_forward);
        gl.uniform1i(this.location_raytracing.location_transfer_function_index_ftle_backward, this.transfer_function_index_ftle_backward);
        
        
        var panning = this.camera.IsPanningOrForced();
        var active_lod = panning ? this.lod_index_panning : this.lod_index_still;
        this.p_streamline_context_static.bind_lod(this.name, active_lod, gl,
            this.shader_uniforms_raytracing,
            this.location_raytracing.location_texture_float,
            this.location_raytracing.location_texture_int);

        this.global_data.bind(this.name, gl,
            this.shader_uniforms_raytracing,
            this.location_raytracing.location_texture_float_global, gl.TEXTURE2, 2,
            this.location_raytracing.location_texture_int_global, gl.TEXTURE3, 3);

        //this.p_ftle_manager.bind(this.name, gl,
        //    this.location_raytracing.location_texture_ftle,
        //    this.location_raytracing.location_texture_ftle_differences);

        this.p_ftle_manager.bind(this.name, gl,
            this.location_raytracing.location_texture_ftle, gl.TEXTURE4, 4,
            this.location_raytracing.location_texture_ftle_differences, gl.TEXTURE5, 5);
            /*
        gl.activeTexture(gl.TEXTURE4);
        gl.bindTexture(gl.TEXTURE_3D, this.p_ftle_manager.data_texture_ftle.texture.texture);
        gl.uniform1i(this.location_raytracing.location_texture_ftle, 4);

        gl.activeTexture(gl.TEXTURE5);
        gl.bindTexture(gl.TEXTURE_3D, this.p_ftle_manager.data_texture_ftle_differences.texture.texture);
        gl.uniform1i(this.location_raytracing.location_texture_ftle_differences, 5);*/

        this.dummy_quad.draw(gl, this.attribute_location_dummy_program_raytracing);
    }

    drawTextureAverage(gl, render_wrapper, width, height) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, render_wrapper.frame_buffer_average);
        gl.viewport(0, 0, this.camera.width, this.camera.height);
        gl.useProgram(this.program_average);
        gl.uniform1i(this.location_average.location_aliasing_index, this.aliasing_index);
        gl.uniform1i(this.location_average.location_width, this.camera.width);
        gl.uniform1i(this.location_average.location_height, this.camera.height);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, render_wrapper.render_texture.texture);
        gl.uniform1i(this.location_average.location_texture1, 0);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, render_wrapper.render_texture_average_in.texture);
        gl.uniform1i(this.location_average.location_texture2, 1);

        this.dummy_quad.draw(gl, this.attribute_location_dummy_program_average);
    }

    //copies data from render_texture_average_out to render_texture_average_in to prepare next frame
    drawTextureSumCopy(gl, render_wrapper, width, height) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, render_wrapper.frame_buffer_average_copy);
        gl.viewport(0, 0, this.camera.width, this.camera.height);
        gl.useProgram(this.program_copy);
        gl.uniform1i(this.location_copy.location_width, this.camera.width);
        gl.uniform1i(this.location_copy.location_height, this.camera.height);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, render_wrapper.render_texture_average_out.texture);
        gl.uniform1i(this.location_copy.location_texture1, 0);

        this.dummy_quad.draw(gl, this.attribute_location_dummy_program_copy);
    }

    drawResampling(gl, render_wrapper) {
        var show_progressbar = this.isRenderingIncomplete();
        var progress = this.aliasing_index / (this.aliasing.num_rays_per_pixel - 1);

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, this.canvas_width, this.canvas_height);
        gl.useProgram(this.program_resampling);
        gl.uniform1f(this.location_resampling.location_show_progressbar, show_progressbar);
        gl.uniform1f(this.location_resampling.location_progress, progress);
        gl.uniform1i(this.location_resampling.location_width, this.canvas_width);
        gl.uniform1i(this.location_resampling.location_height, this.canvas_height);
        gl.uniform1i(this.location_resampling.location_render_color_bar, this.ShouldRenderColorBar());

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, render_wrapper.render_texture_average_out.texture);
        gl.uniform1i(this.location_resampling.location_texture1, 0);
        /*
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, render_wrapper.render_texture_average_out.texture);
        gl.uniform1i(this.location_resampling.location_texture2, 1);
        */
        this.global_data.bind(this.name, gl,
            this.shader_uniforms_resampling,
            this.location_resampling.location_texture_float_global, gl.TEXTURE2, 2,
            this.location_resampling.location_texture_int_global, gl.TEXTURE3, 3);

        this.dummy_quad.draw(gl, this.attribute_location_dummy_program_resampling);
    }

    drawFTLESlice(gl, render_wrapper) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, this.canvas_width, this.canvas_height);
        gl.useProgram(this.program_ftle_slice);
        gl.uniform1i(this.location_ftle_slice.location_width, this.canvas_width);
        gl.uniform1i(this.location_ftle_slice.location_height, this.canvas_height);
        gl.uniform1i(this.location_ftle_slice.location_dim_x, this.p_ftle_manager.dim_x);
        gl.uniform1i(this.location_ftle_slice.location_dim_y, this.p_ftle_manager.dim_y);
        gl.uniform1i(this.location_ftle_slice.location_dim_z, this.p_ftle_manager.dim_z);
        gl.uniform1i(this.location_ftle_slice.location_slice_index, this.draw_slice_index);
        gl.uniform1i(this.location_ftle_slice.location_draw_slice_axes_order, this.draw_slice_axes_order);
        gl.uniform1i(this.location_ftle_slice.location_draw_slice_mode, this.draw_slice_mode);
        gl.uniform1f(this.location_ftle_slice.location_min_scalar, this.p_ftle_manager.ftle_min_value);
        gl.uniform1f(this.location_ftle_slice.location_max_scalar, this.p_ftle_manager.ftle_max_value);
        gl.uniform1i(this.location_ftle_slice.location_render_color_bar, true);
        gl.uniform1i(this.location_ftle_slice.location_transfer_function_index, this.ftle_transfer_function_index);
        gl.uniform1i(this.location_ftle_slice.location_transfer_function_index_backward, this.ftle_transfer_function_index_backward);
        gl.uniform1i(this.location_ftle_slice.location_interpolate, this.ftle_slice_interpolate);
           
        /*
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_3D, this.p_ftle_manager.data_texture_ftle.texture.texture);
        gl.uniform1i(this.location_ftle_slice.location_texture_flow_map, 0);

        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_3D, this.p_ftle_manager.data_texture_ftle_differences.texture.texture);
        gl.uniform1i(this.location_ftle_slice.location_texture_ftle_differences, 1);
        */
        this.global_data.bind(this.name, gl,
            this.shader_uniforms_ftle_slice,
            this.location_ftle_slice.location_texture_float_global, gl.TEXTURE2, 2,
            this.location_ftle_slice.location_texture_int_global, gl.TEXTURE3, 3);
        
        this.p_ftle_manager.bind(this.name, gl,
            this.location_ftle_slice.location_texture_ftle, gl.TEXTURE0, 0,
            this.location_ftle_slice.location_texture_ftle_differences, gl.TEXTURE1, 1);
        /*
         this.p_ftle_manager.bind(this.name, gl,
             this.shader_uniforms_ftle_slice,
             this.location_ftle_slice.location_texture_flow_map);
        */


        this.dummy_quad.draw(gl, this.attribute_location_dummy_program_ftle_slice);
    }

    isRenderingIncomplete() {
        return this.aliasing_index < this.aliasing.num_rays_per_pixel - 1;
    }

    loadShaderUniformsRayTracing(gl, program) {
        var program_shader_uniforms = new ShaderUniforms(gl, program);
        for(var part_index=0; part_index<NUMBER_OF_LOD_PARTS; part_index++){
            program_shader_uniforms.registerUniform("start_index_int_position_data"+part_index, "INT", -1);
            program_shader_uniforms.registerUniform("start_index_float_position_data"+part_index, "INT", -1);
            program_shader_uniforms.registerUniform("start_index_int_line_segments"+part_index, "INT", -1);
            program_shader_uniforms.registerUniform("start_index_float_line_segments"+part_index, "INT", -1);
            program_shader_uniforms.registerUniform("start_index_int_tree_nodes"+part_index, "INT", -1);
            program_shader_uniforms.registerUniform("start_index_float_tree_nodes"+part_index, "INT", -1);
        }

        program_shader_uniforms.registerUniform("start_index_int_dir_lights", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_float_dir_lights", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_int_streamline_color", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_float_streamline_color", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_int_scalar_color", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_float_scalar_color", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_int_cylinder", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_float_cylinder", "INT", -1);

        program_shader_uniforms.print();
        return program_shader_uniforms;
    }

    loadShaderUniformsAverage(gl, program) {
        var program_shader_uniforms = new ShaderUniforms(gl, program);
        program_shader_uniforms.print();
        return program_shader_uniforms;
    }

    loadShaderUniformsCopy(gl, program) {
        var program_shader_uniforms = new ShaderUniforms(gl, program);
        program_shader_uniforms.print();
        return program_shader_uniforms;
    }

    loadShaderUniformsResampling(gl, program) {
        var program_shader_uniforms = new ShaderUniforms(gl, program);
        program_shader_uniforms.registerUniform("start_index_int_dir_lights", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_float_dir_lights", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_int_streamline_color", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_float_streamline_color", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_int_scalar_color", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_float_scalar_color", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_int_cylinder", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_float_cylinder", "INT", -1);

        program_shader_uniforms.print();
        return program_shader_uniforms;
    }

    loadShaderUniformsFTLESlice(gl, program) {
        var program_shader_uniforms = new ShaderUniforms(gl, program);
        program_shader_uniforms.registerUniform("start_index_int_dir_lights", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_float_dir_lights", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_int_streamline_color", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_float_streamline_color", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_int_scalar_color", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_float_scalar_color", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_int_cylinder", "INT", -1);
        program_shader_uniforms.registerUniform("start_index_float_cylinder", "INT", -1);

        program_shader_uniforms.print();
        return program_shader_uniforms;
    }

}

module.exports = CanvasWrapper;