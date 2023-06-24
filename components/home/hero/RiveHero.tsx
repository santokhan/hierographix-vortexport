// https://cdn.rive.app/animations/vehicles.riv

// @ts-nocheck
import { useRive } from '@rive-app/react-canvas';


export default function Rive() {
    const { rive, RiveComponent } = useRive({
        src: "hero.riv",
        autoplay: true,
    });

    return (
        <div className="flex justify-center">
            <RiveComponent className='w-full h-[50vw] lg:h-[700px]' onLoad={() => rive && rive.play()} /></div>
    );
}