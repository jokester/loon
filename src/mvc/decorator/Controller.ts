import {DIContainer} from "../../di/DIContainer";
import {Metadata} from "../../metadata/Metadata";
import {MVCContainer} from "../MVCContainer";
import {ControllerRegistry} from "../ControllerRegistry";

export function Controller(baseRoute?: string) {
    return (target: Function) => {
        const params = Metadata.getParams(target);
        baseRoute = baseRoute ? baseRoute : "";

        DIContainer.registerComponent(undefined, target, params);
        MVCContainer.registerController(target, baseRoute, false);

        ControllerRegistry.registerController(target, baseRoute, false);
    };
}

export function RestController(baseRoute?: string) {
    return (target: Function) => {
        const params = Metadata.getParams(target);
        baseRoute = baseRoute ? baseRoute : "";

        DIContainer.registerComponent(undefined, target, params);
        MVCContainer.registerController(target, baseRoute, true);

        ControllerRegistry.registerController(target, baseRoute, true);
    };
}