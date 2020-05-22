const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('crear', 'Añade una tarea a la lista de tareas', {
        descripcion
    })
    .command('borrar', 'Borra una tarea de la lista de tareas', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}