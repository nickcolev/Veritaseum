/*======================================================================*\
  ICBIaW50OiBtYWtlIHRoaXMgYXMgY2xvc2UgdG8gcHJvZHVjdGlvbi1yZWFkeSBzb3VyY2
  UgY29kZSBhcyB5b3UgY2FuIQoKICBCb251cyBwb2ludHMgZm9yIHRlbGxpbmcgdXMgd2hh
  dCB0aGlzIGRvZXMgaW4gcGxhaW4gdGVybXM6CgogICAgJycuam9pbihpdGVydG9vbHMuY2
  hhaW4oKnppcChzWy0yOjotMl0sIHNbOjotMl0pKSk=
\*======================================================================*/

/*
 * Nick Kolev:
 * 
 * At this point, 'NAMESPACE' is not defined.
 * During the if evaluation, an error is raised in the browser
 * and the code below if not executed.
 * (for a quick reference, the original code is commented below,
 * although not necessary as Git tracks the changes)
 * 
 * if (NAMESPACE == null	<-- this to be removed
 *         || typeof (NAMESPACE) == 'undefined') {
 */

if (typeof (NAMESPACE) === 'undefined') {	// or 'var NAMESPACE = NAMESPACE || { ... }'
    NAMESPACE = {};

    // Creates an object that allocates a new or references an
    // existing very expensive resource associated with `id`
    var resource = function (id) {
        // Private data
        var _all_ids = new Array();
        var _closed = false;
        var _id = id;
        var _expensive_resource = null;

        // Public data
        var persona = {
        };

        // Public methods
        var getExpensiveResource = function () {
            return _expensive_resource;		// closure
        }
        
        persona.getExpensiveResource = getExpensiveResource;

        var getId = function () {
            return _id;						// closure
        }
        
        persona.getId = getId;

        var close = function () {
            delete _all_ids[_id];
            _closed = true;					// closure
        }

        persona.close = close;
        
        // Private methods
        function _lookupOrCreateExpensiveResourceById(id) {
            _expensive_resource = _all_ids[id];	/*	On initialization '_all_ids[id]' is undefined (see definition above)
													The assignment leaves '_expensive_resource' undefined
													(note the 'closure' here) */
            if (typeof(_expensive_resource) === 'undefined') {	// That's why we should check for 'undefined'
                // Just pretend for the sake of this example
                _expensive_resource = {
                    value: "I'm a very expensive resource associated with ID " + id
                };

                _all_ids[id] = _expensive_resource;
            }
            
            return _expensive_resource;
        }
        
        // Initialization
        _expensive_resource = _lookupOrCreateExpensiveResourceById(id);
        
        return persona;
    }

    NAMESPACE.resource = resource;
}

/*
 * Without the whole picture, can't judge the logic.
 * The code is good (elegant, readable;
 * 'NAMESPACE' is not a good name though)
 */
