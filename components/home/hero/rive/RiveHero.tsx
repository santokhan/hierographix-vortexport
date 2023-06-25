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
        <div className="flex justify-center">
            <RiveComponent className='w-full h-[50vw] lg:h-[700px]' onLoad={handleAnimate} />
        </div>
    );
}