// https://cdn.rive.app/animations/vehicles.riv

// @ts-nocheck
import { useRive, UseRiveOptions, UseRiveParameters } from '@rive-app/react-canvas';


export default function Rive() {
    const STATE_MACHINE_NAME = "Basic State Machine"
    const INPUT_Name = "Switch"

    const { rive, RiveComponent } = useRive({
        src: "hero.riv",
        autoplay: true,
        stateMachines: STATE_MACHINE_NAME
    });

    function handleAnimate() {
        if (rive) {
            rive.play();
            console.log(UseRiveOptions);
        }
    }

    return (
        <div className="w-full flex justify-center items-center h-[50vw] lg:h-[600px] overflow-y-hidden">
            <RiveComponent className="w-full h-60 sm:h-80 md:w-92 lg:w-[992px] lg:h-[700px]" onLoad={handleAnimate} />
        </div>
    );
}