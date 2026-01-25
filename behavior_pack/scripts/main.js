import {
    Player,
    world
} from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe((args) => {
    args.hitEntity.applyImpulse(
        {
            x: 0,
            y: 2,
            z: 0
        }
    );

    const damaging = args.damagingEntity;

    if (damaging instanceof Player) {
        damaging.addLevels(20);
        damaging.setOnFire(10, true);
        damaging.lookAt(
            {
                x: 0,
                y: 0,
                z: 0
            }
        );
    }
});

world.afterEvents.targetBlockHit.subscribe((args) => {
    world.sendMessage("あああ");
});

world.afterEvents.buttonPush.subscribe((args) => {
    world.sendMessage("ふぁ！？っく");
});

