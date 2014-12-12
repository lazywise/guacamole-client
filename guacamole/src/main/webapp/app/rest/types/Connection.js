/*
 * Copyright (C) 2014 Glyptodon LLC
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Service which defines the Connection class.
 */
angular.module('rest').factory('Connection', [function defineConnection() {
            
    /**
     * The object returned by REST API calls when representing the data
     * associated with a connection.
     * 
     * @constructor
     * @param {Connection|Object} [template={}]
     *     The object whose properties should be copied within the new
     *     Connection.
     */
    var Connection = function Connection(template) {

        // Use empty object by default
        template = template || {};

        /**
         * The unique identifier associated with this connection.
         *
         * @type String
         */
        this.identifier = template.identifier;

        /**
         * The unique identifier of the connection group that contains this
         * connection.
         * 
         * @type String
         */
        this.parentIdentifier = template.parentIdentifier;

        /**
         * The human-readable name of this connection, which is not necessarily
         * unique.
         * 
         * @type String
         */
        this.name = template.name;

        /**
         * The name of the protocol associated with this connection, such as
         * "vnc" or "rdp".
         *
         * @type String
         */
        this.protocol = template.protocol;

        /**
         * All previous and current usages of this connection, along with
         * associated users.
         *
         * @type ConnectionHistoryEntry[]
         * @default []
         */
        this.history = template.history || [];

        /**
         * Connection configuration parameters, as dictated by the protocol in
         * use, arranged as name/value pairs. This information may not be
         * available if the current user lacks permission to update
         * connection parameters, even if they otherwise have permission to
         * read and use the connection.
         *
         * @type Object.<String, String>
         * @default {}
         */
        this.parameters = template.parameters || {};

    };

    return Connection;

}]);